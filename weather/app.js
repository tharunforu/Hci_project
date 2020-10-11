new Vue({
    el: "#total",
    data() {
        return {
            Temp: undefined,
            url: undefined,
            Feels:undefined,
            Desc:undefined
        };
    },
    mounted() {
        this.locatorButtonPressed();
    },
    methods: {
        locatorButtonPressed:function() {
            navigator.geolocation.getCurrentPosition(
                position => {
                    this.getStreetAddressFrom(position.coords.latitude, position.coords.longitude)
                },
                error => {
                    console.log(error.message);
                }
            );
        },
        getStreetAddressFrom(Lat, Lon) {
            axios.get("https://api.openweathermap.org/data/2.5/weather/",
                {
                    params: {

                        lat: Lat,
                        lon: Lon,
                        // lat:19.9975,
                        // lon:73.7898,
                        units: 'metric',
                        appid: 'ad9b33fefe57f844339b6e4961de8c6a'
                    }
                }).then(res => {
                    this.Temp = res.data.main.temp;
                    console.log(Lat);
                    this.url="http://openweathermap.org/img/w/" + res.data.weather[0].icon + ".png";
                    this.Feels=res.data.main.feels_like;
                    this.Desc=res.data.weather[0].description;
                    console.log(res);

                }).catch(function (error) {
                    alert(error);
                    console.log(error);
                });
        }
    },
    
});
