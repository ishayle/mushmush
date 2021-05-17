import { Injectable } from '@angular/core';
import { Order } from '../model/order';
import { fonts } from '../fonts';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

@Injectable()
export class ShareService {
  constructor() {}

  shareOrder(order: Order) {
    const doc = new jsPDF();
    doc.addFileToVFS('MyFont.ttf', fonts.alef);
    doc.addFont('MyFont.ttf', 'MyFont', 'normal');
    doc.setFont('MyFont');
    doc.setR2L(true);
    autoTable(doc, {
      head: [['פריט', 'כמות', 'ספק']],
      body: order.items.map(i => [i.name, i.amount, i.dealer]),
      styles: { font: 'MyFont' }
    });
    var blob = doc.output('blob');
    window.open(URL.createObjectURL(blob));
    
    //doc.save(order.id + '.pdf');
  }
}
