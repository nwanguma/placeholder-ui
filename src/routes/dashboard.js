import Overview from "../features/overview/index";
import Promotions from "../features/promotions/index";
import Earnings from "../features/earnings/index";
import Bounties from "../features/bounties/index";
import Settings from "../features/settings/index";
import Account from "../features/account/index";
import ProductSpotlight from "../features/productSpotlight/index";

const routes = [
  {
    title: "dashboardOverview",
    path: "/dashboard/overview",
    exact: true,
    component: Overview,
  },
  {
    title: "promotions",
    path: "/dashboard/promotions",
    exact: true,
    component: Promotions,
  },
  {
    title: "account",
    path: "/dashboard/account",
    exact: true,
    component: Account,
  },
  {
    title: "earnings",
    path: "/dashboard/earnings",
    exact: true,
    component: Earnings,
  },
  {
    title: "bounties",
    path: "/dashboard/bounties",
    exact: true,
    component: Bounties,
  },
  {
    title: "settings",
    path: "/dashboard/settings",
    exact: true,
    component: Settings,
  },
  {
    title: "spotlight",
    path: "/dashboard/product-of-the-week",
    exact: true,
    component: ProductSpotlight,
  },
  {
    title: "dashboard",
    path: "/dashboard",
    component: Overview,
  },
];

export default routes;
