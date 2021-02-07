





        function MakeElement(elementtype,classes,type,id,text,value){
                var rend = elementtype
                if(text !== null){
                rend.text(text);
                }
                if(classes !== null){
                rend.addClass(classes);
                }
                if(id !== null){
                rend.attr("id", "BER"+type+id)
                }
                if(value !== null){
                rend.attr("value", value)
                }
            return rend
        }



        function ReRenderArea(rerendertarget,renderarray){

                var renddiv = renderarray[0]

                rerendertarget.append(renddiv);


                for(var i = 0; i < renderarray.length; i++) {
                renddiv.append(renderarray[i]);
                }

                
        }