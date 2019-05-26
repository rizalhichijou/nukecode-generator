function OnStart(){
	lay = app.CreateLayout("linear",'VCenter,FillXY');

	msg = app.CreateText("",1,0.1,'bold');
	msg.SetTextColor("lime");
	msg.SetBackColor("black");
	lay.AddChild( msg );

	gen = app.CreateButton("Generate",0.7,-1,'alum');
	gen.SetOnTouch( gen_touch );
	lay.AddChild( gen );



	app.AddLayout( lay );
}function gen_touch(){
	va = msg.GetText();
	var end = 1234;
	var start = 567890;
	try{
		return Math.floor(Math.random()*(end,start+1))+start;
		alert(console.log(parseInt(start),parseInt(end)));
}
	catch(e){
		alert(console.log( e ));
	}
}