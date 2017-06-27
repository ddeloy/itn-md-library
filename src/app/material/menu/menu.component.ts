import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  selected = '';
  // Custom menu structure - pass in routerLinks here - or external links
  menuItems = [
    {
      text: 'Orders',
      items: [
        {
          text: 'Share'
        },
        {
          text: 'New',
          icon: 'arrow_right',
          items: [
            {
              text: 'Document'
            },
            {
              text: 'New',
              icon: 'arrow_right',
              items: [
                {
                  text: 'New',
                  icon: 'arrow_right',
                  items: [
                    {
                      text: 'Document'
                    },
                    {
                      text: 'Spreadsheet'
                    }
                  ]
                },
                {
                  text: 'Document',
                  icon: 'arrow_right',
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
              icon: 'arrow_right',
              items: [
                {
                  text: 'New',
                  icon: 'arrow_right',
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
      text: 'Edit',
      items: [
        {
          text: 'New Order',
          // extraText: 'Ctrl+Z'
        },
        {
          text: 'Redo Order',
          //   extraText: 'Ctrl+Y'
        },
        {
          divider: true
        },
        {
          text: 'Copy Order',
          //   extraText: 'Ctrl+X'
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
          icon: 'arrow_right',
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

  mitems = [{
    text: 'Refresh'
  }, {
    text: 'Settings'
  }, {
    text: 'Help',
    disabled: true
  }, {
    text: 'Sign Out'
  }];

  iconItems = [{
    text: 'Redial',
    icon: 'dialpad'
  }, {
    text: 'Check voicemail',
    icon: 'voicemail',
    disabled: true
  }, {
    text: 'Disable alerts',
    icon: 'notifications_off'
  }];

  select(text: string) {
    this.selected = text;
  }

  constructor() {}
}
