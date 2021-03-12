import { Component, ViewContainerRef, ViewChild, ViewEncapsulation, OnInit } from '@angular/core';
import { IntegralUITreeView } from '@lidorsystems/integralui-web/bin/integralui/components/integralui.treeview';

@Component({
  selector: 'app-all-in-one-comp',
  templateUrl: './all-in-one-comp.component.html',
  styleUrls: ['./all-in-one-comp.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AllInONeCompComponent implements OnInit {
  @ViewChild('application', {read: ViewContainerRef}) applicationRef: ViewContainerRef | undefined;
  @ViewChild('treeview')
  treeview!: IntegralUITreeView;

  public items: Array<any>;

  private isEditActive = false;
  public editItem: any = null;
  private originalText = '';
  public editorFocused = false;
  public hoverItem: any = null;

  public ctrlStyle: any = {
    general: {
      normal: 'trw-add-dynamic'
    }
  };

  private itemCount = 1;

  constructor(){
    this.items = [
      { text: 'Item 1' }
    ];

  }

  // Add/Remove ------------------------------------------------------------------------

  // tslint:disable-next-line:typedef
  createNewItem(){
    this.itemCount++;

    return { text: 'Item ' + this.itemCount };
  }

  // tslint:disable-next-line:typedef
  addRoot(){
    const item: any = this.createNewItem();

    this.treeview.addItem(item);
    this.showEditor(item);
  }

  // tslint:disable-next-line:typedef
  addChild(parent: any){
    const item: any = this.createNewItem();
    this.treeview.addItem(item, parent);
    this.showEditor(item);
  }

  // tslint:disable-next-line:typedef
  deleteItem(item: any){
    if (item) {
      this.treeview.removeItem(item);
    }
  }

  // Edit ------------------------------------------------------------------------------

  // Selects the whole text in the text editor
  // tslint:disable-next-line:typedef
  selectContent(e: any){
    if (e.target){
      // tslint:disable-next-line:only-arrow-functions typedef
      setTimeout(function(){
        e.target.setSelectionRange(0, e.target.value.length);
      }, 1);
    }
  }

  // tslint:disable-next-line:typedef
  showEditor(item: any){
    this.originalText = item.text;
    this.isEditActive = true;
    this.editItem = item;
    this.editorFocused = true;

    item.allowDrag = false;
  }

  // tslint:disable-next-line:typedef
  closeEditor(){
    if (this.editItem) {
      this.editItem.allowDrag = true;
    }

    this.editItem = null;
    this.originalText = '';
    this.editorFocused = false;
  }

  // tslint:disable-next-line:typedef
  editorKeyDown(e: any){
    if (this.editItem){
      switch (e.keyCode){
        case 13: // ENTER
          this.closeEditor();
          break;

        case 27: // ESCAPE
          this.editItem.text = this.originalText;
          this.closeEditor();
          break;
      }
    }
  }

  // tslint:disable-next-line:typedef
  editorLostFocus(){
    if (this.editItem) {
      this.editItem.text = this.originalText;
    }

    this.closeEditor();
  }

  ngOnInit(): void {
  }

}
