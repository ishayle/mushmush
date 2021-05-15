import { Injectable } from '@angular/core';
import { Order } from '../model/order';
import { fonts } from '../fonts';
import jsPDF from 'jspdf';

//import pdfmake from 'pdfmake/build/pdfmake';
//import pdfFonts from 'pdfmake/build/vfs_fonts';

@Injectable()
export class ShareService {
  constructor() {}

  shareOrder(order: Order) {
    const doc = new jsPDF();
    doc.addFileToVFS('MyFont.ttf', fonts.alef);
    doc.addFont('MyFont.ttf', 'MyFont', 'normal');
    doc.setFont('MyFont');
    // doc.addFileToVFS('IBMPlexSans-Bold.ttf', fonts.base64font);
    // doc.addFont('IBMPlexSans-Bold.ttf', 'PlexBold', 'normal');
    // doc.setFont('PlexBold');
    // doc.autoTable(
    //   ['פריט', 'כמות', 'ספק'],
    //   order.items.map(i => [i.name, i.amount, i.dealer])
    // );
    doc.text(50, 50, 'Now asdשדגכשדגכ is Calibri');

    doc.save('table.pdf');
  }
}
