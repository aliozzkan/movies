export interface IRoute {
  path: string;
  exact?: boolean;
  name: string;
  component: any;
  route: any;
  roles?: any[];
}