export interface MenuItem {
    /**
     * Title of the menu 
     */
    title: string;

    /**
     * Icon of the menu items
     * if icon is note specified then the icon value will be default icon (dashboard) 
     */
    icon?: string;

    /**
     *  Specifie the path link
     *  if not provided you need to have a children routes
     */
    path?: string;

    /**
     * Children routes
     * For children routes path is required
     */
    childrens?: MenuItem[] | null
}