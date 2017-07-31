import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  selected = '';
  color = '';
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
          icon: 'arrow_right',
          items: [
            {
              text: 'Input',
              link: '/material/input'
            },
            {
              text: 'Other Inputs',
              icon: 'arrow_right',
              items: [
                {
                  text: 'New',
                  icon: 'arrow_right',
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
            icon: 'arrow_right',
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

  // required for assuring menu doesn't go out of screen
  onMenuOpen(trigger: any) {
    let paneEl = undefined;
    let winWidth = window.innerWidth;

    // overlayRef is included in trigger only if x/yPosition mentioned
    // else containerElement needs to be used
    if(trigger._overlayRef) {
      paneEl = trigger._overlayRef.overlayElement;
    } else {
      let contEl = trigger._overlay._overlayContainer._containerElement;
      paneEl = contEl.getElementsByClassName('cdk-overlay-pane')[0];
    }

    let curLeft = Number.parseFloat(paneEl.style.left);
    let curMenuWidth = paneEl.clientWidth;
    let curDiff = (curLeft + curMenuWidth) - winWidth;
    if (curDiff > 0) {
      let newLeft = curLeft - curDiff;
      paneEl.style.left = newLeft + 'px';
    }
  }
}
