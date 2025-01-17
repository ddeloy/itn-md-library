import { Component } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  showMenu = false;

  rightMenuItems = [
    {
      text: '',
      leftIcon: 'apps',
      items: [{
        text: 'Manage Users'
      }, {
        text: 'Manage Products'
      }, {
        text: 'Personnel & Equipment'
      }, {
        text: 'Location & Facilities'
      }, {
        text: 'Manage Devices'
      }, {
        text: 'Company Settings'
      },]
    },
    {
      text: 'KJ',
      class: "btn-user",
      menuClass: "menu-user",
      items: [{
        text: 'Profile',
        leftIcon: 'perm_identity'
      }, {
        text: 'Help',
        leftIcon: 'help_outline'
      }, {
        text: 'Logout',
        leftIcon: 'power_settings_new'
      }]
    }
  ]

  // Custom menu structure - pass in routerLinks here - or external links
  menuItems = [
    {
      text: 'Orders',
      items: [
        {
          text: 'Button',
          extraText: 'Ctrl+O',
          link: '/material/button'
        },
        {
          text: 'Inputs',
          rightIcon: 'arrow_right',
          items: [
            {
              text: 'Input',
              link: '/material/input'
            },
            {
              text: 'Other Inputs',
              rightIcon: 'arrow_right',
              items: [
                {
                  text: 'New',
                  rightIcon: 'arrow_right',
                  items: [
                    {
                      text: 'Input Options',
                      link: '/material/inputoptions'
                    },
                    {
                      text: 'Autocomplete',
                      link: '/material/autocomplete'
                    }
                  ]
                },
                {
                  text: 'Document',
                  rightIcon: 'arrow_right',
                  items: [
                    {
                      text: 'Document 1'
                    },
                    {
                      text: 'Document 2'
                    }
                  ]
                }
              ]
            },
            {
              text: 'Spreadsheet'
            },
            {
              text: 'Presentation',
              rightIcon: 'arrow_right',
              items: [
                {
                  text: 'New',
                  rightIcon: 'arrow_right',
                  items: [
                    {
                      text: 'Document'
                    },
                    {
                      text: 'Spreadsheet'
                    }
                  ]
                }
              ]
            },
            {
              text: 'Form'
            }
          ]
        },
        {
          divider: true
        },
        {
          text: 'Open',
          // could show keyboard command - or whatever we want extraText: 'Ctrl+O'
        },
        {
          text: 'Rename',
          disabled: true
        },
        {
          divider: true
        },
        {
          text: 'Print',
          // extraText: 'Ctrl+P'
        }
      ]
    },
    {
      text: 'File',
      items: [
        {
          isCategory: true,
          text: 'File',
          items: [{
            text: 'Select',
            link: '/material/select'
          }, {
            text: 'Save'
          }, {
            text: 'Save As',
            rightIcon: 'arrow_right',
            items: [
              {
                text: 'Print layout'
              },
              {
                text: 'Mode'
              },
              {
                divider: true
              },
              {
                text: 'Full screen'
              },
            ]
          }]
        },
        {
          isCategory: true,
          text: 'Other Action',
          items: [{
            text: 'Delete'
          }, {
            text: 'Exit'
          }]
        }
      ]
    },
    {
      text: 'Edit',
      items: [
        {
          isCategory: true,
          text: 'Action',
          items: [{
            text: 'Undo'
          }, {
            text: 'Redo'
          }, {
            text: 'Chips',
            link: '/material/chips'
          }]
        },
        {
          isCategory: true,
          text: 'Content',
          items: [{
            text: 'Copy'
          }, {
            text: 'Paste'
          }, {
            text: 'Revert to Original'
          }]
        },
        {
          isCategory: true,
          text: 'Other Actions',
          items: [{
            text: 'Delete'
          }, {
            text: 'Delete All'
          }, {
            text: 'Highlight All'
          }]
        }
      ]
    },
    {
      text: 'View',
      items: [
        {
          text: 'Print layout'
        },
        {
          text: 'Mode',
          rightIcon: 'arrow_right',
          items: [
            {
              text: 'Presentation'
            },
            {
              text: 'Edit'
            },
            {
              text: 'Modifiable'
            }
          ]
        },
        {
          divider: true
        },


        {
          text: 'Full screen'
        },
      ]
    },

  ];

  // this code is to be used to enable switching of menu to 3-lines on mobile screens
  onMenuClick() {
    this.showMenu = !this.showMenu;
  }

  constructor() { }

}
