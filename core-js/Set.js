
Elm.Set=function(){
 var empty_0=Elm.Dict.empty;
 var remove_3=Elm.Dict.remove;
 var member_4=Elm.Dict.member;
 var union_5=Elm.Dict.union;
 var intersect_6=Elm.Dict.intersect;
 var diff_7=Elm.Dict.diff;
 var toList_8=Elm.Dict.keys;
 var fromList_9=Elm.List.foldl(function(k_15){
  return function(t_16){
   return Elm.Dict.insert(k_15)(["Tuple0"])(t_16);};})(empty_0);
 function singleton_1(k_13){
  return Elm.Dict.singleton(k_13)(["Tuple0"]);};
 function insert_2(k_14){
  return Elm.Dict.insert(k_14)(["Tuple0"]);};
 function foldl_10(f_17){
  return Elm.Dict.foldl(function(k_18){
   return function(v_19){
    return function(b_20){
     return f_17(k_18)(b_20);};};});};
 function foldr_11(f_21){
  return Elm.Dict.foldr(function(k_22){
   return function(v_23){
    return function(b_24){
     return f_21(k_22)(b_24);};};});};
 function map_12(f_25){
  return function(t_26){
   return function(x){
    return fromList_9(Elm.List.map(f_25)(x));}(toList_8(t_26));};};
 return {empty:empty_0,singleton:singleton_1,insert:insert_2,remove:remove_3,member:member_4,union:union_5,intersect:intersect_6,diff:diff_7,toList:toList_8,fromList:fromList_9,foldl:foldl_10,foldr:foldr_11,map:map_12};}();