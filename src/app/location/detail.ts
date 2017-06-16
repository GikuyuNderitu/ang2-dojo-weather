export class WeatherDetail {
	humidity: number;
	temp_max: number;
	temp_min: number;
	temp_avg: number;
	status: string;

	constructor(
		humidity: number,
		temp_max: number,
		temp_min: number,
		temp_avg: number,
		status: string) {
			this.humidity = humidity;
			this.temp_max = temp_max;
			this.temp_min = temp_min;
			this.temp_avg =  temp_avg;
			this.status = status;
	}
}
