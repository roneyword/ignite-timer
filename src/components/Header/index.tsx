import { NavLink } from "react-router-dom";
import { LogoIcon } from "../Icons/LogoIcon";
import { PaperIcon } from "../Icons/PaperIcon";
import { TimerIcon } from "../Icons/TimerIcon";
import { HeaderContainer } from "./style";

export function Header() {
  return (
    <HeaderContainer>
      <figure>
        <LogoIcon />
      </figure>

      <nav>
        <NavLink to="/" title="Timer">
          <TimerIcon />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <PaperIcon />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
