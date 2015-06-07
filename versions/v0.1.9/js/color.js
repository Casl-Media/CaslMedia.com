$( document ).ready(function() {
        // borrowed from https://github.com/mbostock/d3/blob/master/lib/colorbrewer/colorbrewer.js
        // This product includes color specifications and designs developed by Cynthia Brewer (http://colorbrewer.org/).
        var colorbrewer = [
                            ["#1b9e77","#d95f02","#7570b3","#e7298a","#66a61e","#e6ab02","#a6761d","#666666"],
                            ["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00","#6a3d9a","#b15928"],
                            ["#e41a1c","#377eb8","#4daf4a","#984ea3","#ff7f00","#a65628","#f781bf","#999999"]
                        ];
        // http://www.flatuicolorpicker.com/gray
        var backgroundcolors = ["#ececec","#D2D7D3","#BDC3C7","#ECF0F1","#95A5A6","#DADFE1","#ABB7B7","#F2F1EF","#BFBFBF"];
                                   
        
        //https://github.com/coolaj86/knuth-shuffle
        function shuffle(array) {
          var currentIndex = array.length, temporaryValue, randomIndex ;

          // While there remain elements to shuffle...
          while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
          }

          return array;
        }

        shuffle(colorbrewer);
        colors = shuffle(colorbrewer[0]);
        backgroundcolor = shuffle(backgroundcolors);
        $( "body" ).css( "background-color", backgroundcolor[0]);
        $( ".jumbotron" ).each(function( index ) {     
            var col = 0
            // you might not need the -1, i don't use js. didn't solve for all of math, brewer scales are typically 9 length
            if (index > colors.length - 1) {
                if (index > colors.length * 2 - 1) {
                    if (index > colors.length * 3 - 1) {
                        col = index - colors.length * 3
                    } else {
                        col = index - colors.length * 2
                    }
                } else {
                    col = index - colors.length
                }
            } else {
                col = index
            }
            $( this ).css( "border", "5px solid " + colors[col]);
            $( this ).find( "a" ).css( "color", colors[col]);
            $( this ).find( ".section" ).css( "border-bottom", "5px solid " + colors[index]);
            if ( $( this ).attr( "id" ) == "CM" ) {
                $( ".navOne" ).css( "color", colors[col]);
            } else if ( $( this ).attr( "id" ) == "updates" ) {
                $( ".navTwo" ).css( "border-bottom", "2px solid " + colors[col]);
            } else if ( $( this ).attr( "id" ) == "consulting" ) {
                $( ".navFour" ).css( "border-bottom", "2px solid " + colors[col]);
            } else if ( $( this ).attr( "id" ) == "publishing" ) {
                $( ".navFive" ).css( "border-bottom", "2px solid " + colors[col]);
            } else if ( $( this ).attr( "id" ) == "about" ) {
                $( ".navSix" ).css( "border-bottom", "2px solid " + colors[col]);
            } else if ( $( this ).attr( "id" ) == "contact" ) {
                $( ".navSeven" ).css( "border-bottom", "2px solid " + colors[col]);
            } else if ( $( this ).attr( "id" ) == "CB" ) {
                $( ".navEight" ).css( "border-bottom", "2px solid " + colors[col]);
            } else if ( $( this ).attr( "id" ) == "OE" ) {
                $( ".navNine" ).css( "border-bottom", "2px solid " + colors[col]);
            } else if ( $( this ).attr( "id" ) == "TTM" ) {
                $( ".navTen" ).css( "border-bottom", "2px solid " + colors[col]);
            } else if ( $( this ).attr( "id" ) == "NPR" ) {
                $( ".navEleven" ).css( "border-bottom", "2px solid " + colors[col]);
            } else if ( $( this ).attr( "id" ) == "IN" ) {
                $( ".navTwelve" ).css( "border-bottom", "2px solid " + colors[col]);
            } else {

            }
        });
});
