import sinon from 'sinon';
import * as paymentsController from '../../controllers/payments.controller.js';
import PaymentsService from '../../services/PaymentsService.js';
import HttpStatusCode from '../../enums/HttpStatusCode.js';

describe('Payments Controller', () => {
    afterEach(() => {
        sinon.restore();
    });

    describe('createPayment', () => {
        it('should create a new payment', async () => {
            const req = { body: { ClassId: 1, UserId: 1, Amount: 100, Status: 'pending' } };
            const res = {
                status: sinon.stub().returnsThis(),
                json: sinon.stub()
            };

            const paymentMock = { Id: 1, ClassId: 1, UserId: 1, Amount: 100, Status: 'pending' };
            sinon.stub(PaymentsService, 'createPayment').returns(paymentMock);

            await paymentsController.createPayment(req, res);

            sinon.assert.calledWith(res.status, HttpStatusCode.CREATED);
            sinon.assert.calledWith(res.json, paymentMock);
        });

        it('should return 500 on service error', async () => {
            const req = { body: { ClassId: 1, UserId: 1, Amount: 100, Status: 'pending' } };
            const res = {
                status: sinon.stub().returnsThis(),
                json: sinon.stub()
            };

            sinon.stub(PaymentsService, 'createPayment').throws(new Error('Service error'));

            await paymentsController.createPayment(req, res);

            sinon.assert.calledWith(res.status, HttpStatusCode.INTERNAL_SERVER_ERROR);
            sinon.assert.calledWith(res.json, { message: 'Failed to create payment' });
        });

        it('should return 400 on missing required fields', async () => {
            const req = { body: {} };
            const res = {
                status: sinon.stub().returnsThis(),
                json: sinon.stub()
            };

            await paymentsController.createPayment(req, res);

            sinon.assert.calledWith(res.status, HttpStatusCode.BAD_REQUEST);
            sinon.assert.calledWith(res.json, { message: 'All fields are required' });
        });
    });
});