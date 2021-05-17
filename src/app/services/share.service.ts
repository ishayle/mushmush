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
    var blob = doc.output('bloburl');
    //window.open(URL.createObjectURL(blob));
    navigator.share({
      text: order.id + '.pdf',
      title: order.id + '.pdf',
      url: blob.href
    });

    //doc.save(order.id + '.pdf');
  }
}
