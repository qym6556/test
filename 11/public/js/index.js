$(function(){
	$("#btnsubmit").click(function(e){
		e.preventDefault();
		console.log(1);
		$.ajax({
			url:'/receive',
			type:'get',
			dataType:'json',
			data:{
				username:$('#username').val()
			},
			success:function(data){
				console.log(data);
			},
			error:function(err){
				console.log(err);
			}
		})
	});
});