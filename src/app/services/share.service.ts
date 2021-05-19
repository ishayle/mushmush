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
    doc.text(
      order.time
        .toLocaleDateString()
        .split('')
        .reverse()
        .join(''),
      doc.canvas.width / 2,
      20
    );
    autoTable(doc, {
      margin: { top: 30 },
      head: [['ספק', 'כמות', 'פריט']],
      body: order.items.map(i => [
        i.dealer,
        i.amount
          .toString()
          .split('')
          .reverse()
          .join(''),
        i.name
      ]),
      showHead: 'everyPage',
      headStyles: {
        valign: 'middle',
        halign: 'center'
      },
      bodyStyles: {
        valign: 'middle',
        halign: 'center'
      },
      styles: { font: 'MyFont' }
    });
    //var blob = doc.output('bloburi');
    //window.open(URL.createObjectURL(blob.href));

    doc.save(order.id + '.pdf');
  }
}
