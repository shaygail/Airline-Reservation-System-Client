import {TextField} from '@mui/material';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {MobileDatePicker} from '@mui/x-date-pickers/MobileDatePicker';
import {AdapterLuxon} from '@mui/x-date-pickers/AdapterLuxon';
import {useState} from 'react';

export default function DatePicker({label}) {
	const [value, setValue] = useState();

	const handleChange = (newValue) => {
		setValue(newValue);
	};

	return (
		<LocalizationProvider dateAdapter={AdapterLuxon}>
			<MobileDatePicker
				inputFormat="MM/dd/yyyy"
				type="datetime-local"
				label={label}
				value={value}
				onChange={handleChange}
				renderInput={(params) => (
					<TextField
						variant="filled"
						sx={{bgcolor: 'white', borderRadius: 1}}
						{...params}
					/>
				)}
			/>
		</LocalizationProvider>
	);
}
