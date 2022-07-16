'use babel';

import DaftarNamaSlotOnlineGacorView from './daftar-nama-slot-online-gacor-view';
import { CompositeDisposable } from 'atom';

export default {

  daftarNamaSlotOnlineGacorView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.daftarNamaSlotOnlineGacorView = new DaftarNamaSlotOnlineGacorView(state.daftarNamaSlotOnlineGacorViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.daftarNamaSlotOnlineGacorView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'daftar-nama-slot-online-gacor:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.daftarNamaSlotOnlineGacorView.destroy();
  },

  serialize() {
    return {
      daftarNamaSlotOnlineGacorViewState: this.daftarNamaSlotOnlineGacorView.serialize()
    };
  },

  toggle() {
    console.log('DaftarNamaSlotOnlineGacor was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
