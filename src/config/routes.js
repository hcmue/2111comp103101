import { About } from '../components/About';
import { ToDoList } from '../components/Todo';
import { NotFound } from '../components/NotFound';
import { Comment } from '../components/Comment';
import { Counter } from '../components/Counter';
import { SignInForm } from '../components/SignIn';

export const routes = [
    // {
    //     path: "/",
    //     // component: NotFound,
    //     label: "Home"
    // },
    {
        path: "/about",
        component: About,
        label: "About"
    },
    {
        path: "/todo",
        component: ToDoList,
        label: "TODO"
    },
    {
        path: "/comment",
        component: Comment,
        label: "Comments"
    },
    {
        path: "/counter",
        component: Counter,
        label: "My Counter"
    },
    {
        path: "/signin",
        component: SignInForm,
        label: "SIGN IN"
    },
    {
        path: "*",
        component: NotFound,
        // label: "Not Found"
    }
];