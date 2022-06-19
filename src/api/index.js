import * as admin from './admin';
import * as airplane from './airplane';
import * as airplane_model from './airplane-model';
import * as attendant from './attendant';
import * as booking from './booking';
import * as flight from './flight';
import * as location from './location';
import * as passenger from './passenger';
import * as pilot from './pilot';
import * as route from './route';
import * as user from './user';

const apis = {
	...admin,
	...airplane,
	...airplane_model,
	...attendant,
	...booking,
	...flight,
	...location,
	...passenger,
	...pilot,
	...route,
	...user
};

export default apis;
