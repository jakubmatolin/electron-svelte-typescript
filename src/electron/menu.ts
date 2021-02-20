import { App, Menu, MenuItemConstructorOptions } from 'electron'

export const buildMenuTemplate = (app: App, isDev: boolean): Menu => {
    const defaultMenus: MenuItemConstructorOptions[] = [
        {
            role: 'fileMenu',
        },
        {
            role: 'editMenu',
        },
        {
            role: 'viewMenu',
        },
        {
            role: 'windowMenu',
        },
        {
            role: 'help',
        },
    ]
    const devMenu: MenuItemConstructorOptions = {
        label: 'Developer',
        submenu: [
            { role: 'reload' },
            { role: 'forceReload' },
            {
                label: 'Relaunch',
                click: () => {
                    app.relaunch()
                    app.exit()
                },
                accelerator: 'Ctrl+Alt+R',
            },
            { role: 'toggleDevTools' },
        ],
    }

    const menuTemplate: MenuItemConstructorOptions[] = isDev
        ? [...defaultMenus, devMenu]
        : [...defaultMenus]
    return Menu.buildFromTemplate(menuTemplate)
}
