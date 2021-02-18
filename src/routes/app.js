import Overview from "../features/overview/index";
import Challenges from "../features/challenges/index";
import Profile from "../features/profile/index";
import Bounties from "../features/bounties/index";
import Settings from "../features/settings/index";
import ProductSpotlight from "../features/productSpotlight/index";
import Blog from "../features/blog/index";

const routes = [
  {
    title: "overview",
    path: "/app/overview",
    exact: true,
    component: Overview,
  },
  {
    title: "challenges",
    path: "/app/challenges",
    exact: true,
    component: Challenges,
  },
  {
    title: "bounties",
    path: "/app/bounties",
    exact: true,
    component: Bounties,
  },
  {
    title: "profile",
    path: "/app/profile",
    exact: true,
    component: Profile,
  },
  {
    title: "settings",
    path: "/app/settings",
    exact: true,
    component: Settings,
  },
  // {
  //   title: "blog",
  //   path: "/app/blog",
  //   exact: true,
  //   component: Blog,
  // },
  // {
  //   title: "spotlight",
  //   path: "/app/spotlight",
  //   exact: true,
  //   component: ProductSpotlight,
  // },
  {
    title: "app",
    path: "/app",
    component: Overview,
  },
];

export default routes;
