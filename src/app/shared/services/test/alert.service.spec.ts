import { TestBed } from '@angular/core/testing';

import { AlertService } from '../alert.service';
import { AppModule } from 'src/app/app.module';
import { AlertController } from '@ionic/angular';

describe('AlertService', () => {
  let service: AlertService;
  let matDialogService: any;

  beforeEach(() => {
    const mockMatDialog = jasmine.createSpyObj('AlertController', ['open']);
    TestBed.configureTestingModule({
      providers: [
        AlertService,
        { provide: AlertController, useValue: mockMatDialog }
      ],
      imports: [AppModule]
    });
    service = TestBed.inject(AlertService);
    matDialogService = TestBed.inject(AlertController);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should display error alert', () => {
    service.error('test');
    expect(matDialogService.open).toHaveBeenCalledWith(jasmine.any(Function),
    { panelClass: 'alert-dialog', data: { type: 'error', message: 'test' } });
  });

  it('should display info alert', () => {
    service.info('test');
    expect(matDialogService.open).toHaveBeenCalledWith(jasmine.any(Function),
    { panelClass: 'alert-dialog', data: { type: 'info', message: 'test' } });
  });
});
