import { PlayIcon } from "../../components/Icons/PlayIcons";
import { StopIcon } from "../../components/Icons/StopIcon";
import { NewCyrcleForm } from "./components/NewCycleForm";
import { CountDown } from "./components/CountDown";

import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";

import {
  HomeContainer,
  StartCountdownButton,
  StopCountdownButton,
} from "./style";
import { CyclesContext } from "../../context/CyclesContext";
import { useContext } from "react";

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, "Informe a tarefa"),
  minutesAmount: zod
    .number()
    .min(5, "O ciclo precisa ser de no minimo 5 minutos")
    .max(60, "O ciclo precisa ser de no máximo 60 minutos"),
});

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>;

export function Home() {
  const { activeCycle, createNewCycle, interrupCurrentCycle } =
    useContext(CyclesContext);

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: "",
      minutesAmount: 0,
    },
  });

  const { handleSubmit, watch, reset } = newCycleForm;

  function handleCreateNewCycle(data: NewCycleFormData) {
    createNewCycle(data);
    reset();
  }

  const isSubmiteDisable = !watch("task");

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormProvider {...newCycleForm}>
          <NewCyrcleForm />
        </FormProvider>

        <CountDown />

        {activeCycle ? (
          <StopCountdownButton type="button" onClick={interrupCurrentCycle}>
            <StopIcon /> Interromper
          </StopCountdownButton>
        ) : (
          <StartCountdownButton type="submit" disabled={isSubmiteDisable}>
            <PlayIcon /> Começar
          </StartCountdownButton>
        )}
      </form>
    </HomeContainer>
  );
}
