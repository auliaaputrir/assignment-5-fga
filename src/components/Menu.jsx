import { NavLink } from 'react-router-dom';

export default function Menu() {
    return (
        <ul className="flex flex-col gap-4 text-white">
            <li>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? 'font-medium' : 'font-normal'
                    }
                >
                    HOME
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/about"
                    className={({ isActive }) =>
                        isActive ? 'font-medium' : 'font-normal'
                    }
                >
                    ABOUT
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/experience"
                    className={({ isActive }) =>
                        isActive ? 'font-medium' : 'font-normal'
                    }
                >
                    EXPERIENCE
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/education"
                    className={({ isActive }) =>
                        isActive ? 'font-medium' : 'font-normal'
                    }
                >
                    EDUCATION
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/skills"
                    className={({ isActive }) =>
                        isActive ? 'font-medium' : 'font-normal'
                    }
                >
                    SKILLS
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/interest"
                    className={({ isActive }) =>
                        isActive ? 'font-medium' : 'font-normal'
                    }
                >
                    INTEREST
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/awards"
                    className={({ isActive }) =>
                        isActive ? 'font-medium' : 'font-normal'
                    }
                >
                    AWARDS
                </NavLink>
            </li>
        </ul>
    );
}
