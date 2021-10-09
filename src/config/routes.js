import { About } from '../components/About';
import { ToDoList } from '../components/Todo';
import { NotFound } from '../components/NotFound';
import { Comment } from '../components/Comment';
import { Counter } from '../components/Counter';
import { SignInForm } from '../components/SignIn';
import { TodoAppTimeline } from '../components/TodoAppTimeline';

export const routes = [
    // {
    //     path: "/",
    //     // component: NotFound,
    //     label: "Home"
    // },
    {
        path: "/timeline",
        component: TodoAppTimeline,
        label: "Timeline"
    },
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