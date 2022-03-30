let app = new Vue({
    el: '#app',
        data : {
            marque: 'magic',
            product: 'les chaussettes',
            selectionVariant: 0,
            stock : 0,
            details : ["paire de chaussettes chaudes et douces","80% cotton", "naturel" , "recyclé"],
            variants:[
                {
                    variantId : 2234,
                    variantColor : 'green',
                    variantImage : 'https://cdn.pixabay.com/photo/2022/03/16/00/49/artwork-7071355__340.jpg',
                    variantQuantite : 10
                },
                {
                    variantId : 2235,
                    variantColor : "red",
                    variantImage : 'https://cdn.pixabay.com/photo/2022/03/06/15/03/insect-7051807__340.jpg',
                    variantQuantite : 0
                }
            ],
            tailles : ["30 - 35" , "35 - 40" , "40 - 45"],
            carte : 0,
            classAActiver : 'BaliseRuptureDeStock'
        },
        methods : {
            ajouterCarte(){
                this.carte += 1 ;
            },
            updateProduct(index){
                this.selectionVariant = index ;
                console.log(index) ;
            },
            retirerCarte(){
                if(this.carte > 0){
                this.carte -= 1;
                }
            }
        },
        computed: {
            article() {
                return this.product + " " + this.marque ;
            },
            image(){
                return this.variants[this.selectionVariant].variantImage ;
            },
            aVendre(){
                return this.variants[this.selectionVariant].variantQuantite ;
            }
        }
        
})