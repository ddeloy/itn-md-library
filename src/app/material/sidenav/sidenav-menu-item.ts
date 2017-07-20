export class SidenavMenuItem {
  public secTitle: string;
  public title: string;
  public link: string;
  public children: SidenavMenuItem[];
  public hasChildren: boolean = false;
  public pageTitle: string;

  constructor(secTitle: string, title: string, pageTitle: string, link: string, children: SidenavMenuItem[]){
      this.title = title;
      this.secTitle = secTitle;
      this.link = link;
      this.children = children;
      this.hasChildren = (children!=null && children.length!=0);
      this.pageTitle = pageTitle;
  }
}