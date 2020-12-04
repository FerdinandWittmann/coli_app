export default roomAttributes = [
    {
        name: "Floor",
        icon: {
            lib: "MatericalIcons",
            name: "apartment"
        },

        labels: [{
            label: "1. Floor", value: "1. Floor"
        }, {
            label: "2. Floor", value: "2. Floor"
        }, {
            label: "3. Floor", value: "3. Floor"
        }, {
            label: "4. Floor", value: "4. Floor"
        }, {
            label: "6. Floor", value: "5. Floor"
        }, {
            label: "7. Floor", value: "8. Floor"
        }, {
            label: "9. Floor", value: "9. Floor"
        }, {
            label: "10. Floor", value: "10. Floor"
        }, {
            label: ">10. Floor", value: ">10. Floor"
        },

        ]
    },
    {
        name: "House Type",
        labels: [{
            label: "Multi-Family House",
        }, {
            label: "Apartment Complex"
        }, {
            label: "Skyscraper"
        }, {
            label: "Individual House"
        }, {
            label: "Shared House"
        }]
    }, {
        name: "Furbished",
        icon: {
            lib: "MaterialCommunityIcons",
            name: "bed-king"
        },
        labels: [{
            label: "yes", value: "yes"
        }, {
            label: "no", value: "no"
        }, {
            label: "partly", value: "partly"
        }]
    }, {
        name: "Public Transport",
        icon: {
            lib: "MaterialIcons",
            name: "diretions-bus"
        },
        labels: [{
            label: "<1 minutes", value: "<1 minutes"
        }, {
            label: "<5 minutes", value: "<5 minutes"
        }, {
            label: "<10 minutes", value: "<10 minutes"
        }, {
            label: "<15 minutes", value: "<15 minutes"
        }, {
            label: ">15 minutes", value: ">15 minutes"
        }
        ]
    }, {
        name: "Internet Speed",
        icon: {
            lib: "MaterialIcons",
            name: "network-check"
        },
        labels: [{
            label: "<10 Mbit/s", value: "<10 Mbit/s"
        }, {
            label: "<50 Mbit/s", value: "<50 Mbit/s"
        }, {
            label: "<100 Mbit/s", value: "<100 Mbit/s"
        }, {
            label: ">100 Mbit/s", value: ">100 Mbit/s"
        }]
    }, {
        name: "Smoking",
        icons: {
            lib: "MaterialIcons",
            name: "smoking"
        },
        labels: [{
            label: "outside", value: "outside"
        }, {
            label: "balcony", value: "balcony"
        }, {
            label: "inside", value: "inside"
        }]
    }, {
        name: "Size in m^2",
        icon: {
            lib: "MaterialIcons",
            name: "photo-size-select-small"
        },
        text: {
            end: " m^2"
        }
    }, {
        name: "Available from",
        icon: {
            lib: "MaterialCommunityIcons",
            name: "calendar-month-outline"
        },
        text: {

        },
    }, {
        name: "availabillity",
        icon: {
            lib: "MaterialCommunityIcons",
            name: "calendar-remove-outline"
        },
        labels: [{
            label: "1 Month", value: "1 Month"
        }, {
            label: "2 Months", value: "2 Months"
        }, {
            label: "3 Months", value: "3 Months"
        }, {
            label: "4 Months", value: "4 Months"
        }, {
            label: "6 Months", value: "5 Months"
        }, {
            label: "7 Months", value: "8 Months"
        }, {
            label: "9 Months", value: "9 Months"
        }, {
            label: "10 Months", value: "10 Months"
        }, {
            label: "11 Months", value: "11 Months"
        }, {
            label: "12 Months", value: "12 Months"
        }, {
            label: ">12 Months", value: ">12 Months"
        },]
    }, {
        name: "Number of rooms",
        text: {}
    }
]
