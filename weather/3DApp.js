new Vue({
    el: "#total",
    data() {
        return {
            Temp1: undefined,
            url1: undefined,
            Feels1: undefined,
            Desc1: undefined,
            Dat1:undefined,

            Temp2: undefined,
            url2: undefined,
            Feels2: undefined,
            Desc2: undefined,
            Dat2:undefined,

            Temp3: undefined,
            url3: undefined,
            Feels3: undefined,
            Desc3: undefined,
            Dat3:undefined
        };
    },
    created() {
        this.locatorButtonPressed();
    },
    methods: {
        locatorButtonPressed: function () {
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
            axios.get("https://api.openweathermap.org/data/2.5/forecast/",
                {
                    params: {
                        lat: Lat,
                        lon: Lon,
                        units: 'metric',
                        appid: 'ad9b33fefe57f844339b6e4961de8c6a'
                    }
                }).then(res => {
                    console.log(res);
                    this.Temp1 = res.data.list[7].main.temp;
                    console.log(this.Temp1);
                    this.url1 = "http://openweathermap.org/img/w/" + res.data.list[7].weather[0].icon + ".png";
                    this.Feels1 = res.data.list[7].main.feels_like;
                    this.Desc1 = res.data.list[7].weather[0].description;
                    console.log(this.Desc1);
                    var currentDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
                    var day = currentDate.getDate()
                    var month = currentDate.getMonth() + 1
                    var year = currentDate.getFullYear()
                    this.Dat1= + day + "/" + month + "/" + year 
                    


                    this.Temp2 = res.data.list[15].main.temp;
                    console.log(this.Temp2);
                    this.url2 = "http://openweathermap.org/img/w/" + res.data.list[15].weather[0].icon + ".png";
                    this.Feels2 = res.data.list[15].main.feels_like;
                    this.Desc2 = res.data.list[15].weather[0].description;
                    console.log(this.Desc2);
                    currentDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
                    day = currentDate.getDate()+1
                    month = currentDate.getMonth() + 1
                    year = currentDate.getFullYear()
                    this.Dat2= + day + "/" + month + "/" + year 
        


                    this.Temp3 = res.data.list[23].main.temp;
                    console.log(this.Temp3);
                    this.url3 = "http://openweathermap.org/img/w/" + res.data.list[23].weather[0].icon + ".png";
                    this.Feels3 = res.data.list[23].main.feels_like;
                    this.Desc3 = res.data.list[23].weather[0].description;
                    console.log(this.Desc3);
                    currentDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
                    day = currentDate.getDate()+2
                    month = currentDate.getMonth() + 1
                    year = currentDate.getFullYear()
                    this.Dat3= + day + "/" + month + "/" + year 
                    


                }).catch(function (error) {
                    alert(error);
                    console.log(error);
                });
        }
    },

});
