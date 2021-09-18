import { About } from '../components/About';
import { ToDoList } from '../components/Todo';
import { NotFound } from '../components/NotFound';
import { Comment } from '../components/Comment';

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
        path: "*",
        component: NotFound,
        // label: "Not Found"
    }
];