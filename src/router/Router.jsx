import { createBrowserRouter } from "react-router";
import Root from "../MainLayout/Root";
import Home from "../pages/Home";
import AllRecipe from "../pages/AllRecipe";
import MyRecipe from "../pages/MyRecipe";
import ErrorPage from "../pages/ErrorPage";
//https://i.ibb.co/5XKK9t5h/recipe-1.png
//https://i.ibb.co/fzMMwBfr/recipe-2.png
//https://i.ibb.co/ZzfnMjNc/recipe-3.png
//https://i.ibb.co/k6V871NJ/recipe-4.png
//https://i.ibb.co/6pqYNfx/recipe-5.png
//https://i.ibb.co/2Rh9BqC/recipe-6.png
export const router = createBrowserRouter([
    {
        errorElement: <ErrorPage></ErrorPage>,
        path: "/",
        Component: Root,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: "/all-recipe",
                Component: AllRecipe
            },
            {
                path: "/my-recipe",
                Component: MyRecipe
            }
        ]
    }
])