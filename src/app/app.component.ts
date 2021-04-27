import { Component } from '@angular/core';
import { BarcodeFormat } from '@zxing/library';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'qrscan';
  value = "";
  allowedFormats = [BarcodeFormat.QR_CODE, BarcodeFormat.EAN_13, BarcodeFormat.CODE_128, BarcodeFormat.DATA_MATRIX /*, ...*/];

  Output: string | undefined;

  onScan(output: string) {
    this.Output = output
  };

  generate(inputed: string) {
    this.value = inputed
  }


}
