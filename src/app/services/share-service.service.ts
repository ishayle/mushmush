import { Injectable } from '@angular/core';
import { Order } from '../model/order';
@Injectable()
export class ShareService {
  constructor() {}

  shareOrder(order: Order) {
    // const doc = new jsPDF();
    // doc.addFileToVFS('IBMPlexSans-Bold.ttf', fonts.base64font);
    // doc.addFont('IBMPlexSans-Bold.ttf', 'PlexBold', 'normal');
    // doc.setFont('PlexBold');
    // doc.autoTable(
    //   ['פריט', 'כמות', 'ספק'],
    //   order.items.map(i => [i.name, i.amount, i.dealer])
    // );
    // doc.save('table.pdf');
  }
}
