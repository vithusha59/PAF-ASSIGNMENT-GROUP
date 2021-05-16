$(document).ready(function() {
	if ($("#alertSuccess").text().trim() == "") {
		$("#alertSuccess").hide();
	}
	$("#alertError").hide();
});

// SAVE ============================================
$(document).on("click", "#btnSave", function(event) {
	
	// Clear alerts---------------------
	$("#alertSuccess").text("");
	$("#alertSuccess").hide();
	$("#alertError").text("");
	$("#alertError").hide();

	// Form validation-------------------
	var status = validateProductForm();
	if (status != true) {
		$("#alertError").text(status);
		$("#alertError").show();
		return;
	}

	
	// If valid-------------------------

	// $("#formPayment").submit();

	var type = ($("#hidProductIDSave").val() == "") ? "POST" : "PUT";

	$.ajax(
	   {
		url : "ProductAPI",
		type : type,
		data : $("#formProduct").serialize(),
		dataType : "text",
		complete : function(response, status) {
			onProductSaveComplete(response.responseText, status);
		}
	});

});


function onProductSaveComplete(response, status) {
	
	if (status == "success")
		{
			var resultSet = JSON.parse(response);
			
			if (resultSet.status.trim() == "success")
				{
				$("#alertSuccess").text("Successfully saved.");
				$("#alertSuccess").show();
				$("#divProductGrid").html(resultSet.data);
				
				}else if (resultSet.status.trim() == "error")
					{
					$("#alertError").text(resultSet.data);
					$("#alertError").show();
					
					}
		}else if (status == "error")
		{
			$("#alertError").text("Error while saving.");
			$("#alertError").show();
			
		}else
			{
			$("#alertError").text("UnKnown error while saving..");
			$("#alertError").show();
			}
	
		$("#hidProductIDSave").val("");
		$("#formProduct")[0].reset();
	
}


//UPDATE==========================================
$(document).on("click", ".btnUpdate", function(event)
{
	$("#hidProductIDSave").val($(this).closest("tr").find('#hidProductIDUpdate').val());
	$("#Product_Code").val($(this).closest("tr").find('td:eq(0)').text());
	$("#Product_Name").val($(this).closest("tr").find('td:eq(1)').text());
	$("#Category").val($(this).closest("tr").find('td:eq(2)').text());
	$("#collaborators").val($(this).closest("tr").find('td:eq(3)').text());
	$("#Price").val($(this).closest("tr").find('td:eq(4)').text());
	$("#Email").val($(this).closest("tr").find('td:eq(5)').text());
});


//REMOVE=========================================================
$(document).on("click", ".btnRemove", function(event)
		{
			$.ajax(
					{
						url : "ProductAPI",
						type : "DELETE",
						data : "Product_ID=" + $(this).data("productid"),
						dataType : "text",
						complete : function(response, status)
						{
							onProductDeleteComplete(response.responseText, status);
						}
					});
		});


function onProductDeleteComplete(response, status) {
	
	if (status == "success")
		{
			var resultSet = JSON.parse(response);
			
			if (resultSet.status.trim() == "success")
				{
				$("#alertSuccess").text("Successfully Delete.");
				$("#alertSuccess").show();
				
				$("#divProductGrid").html(resultSet.data);
				}else if (resultSet.status.trim() == "error")
					{
					$("#alertError").text(resultSet.data);
					$("#alertError").show();
					
					}
		}else if (status == "error")
		{
			$("#alertError").text("Error while deleting.");
			$("#alertError").show();
		}else
			{
			$("#alertError").text("UnKnown error while deleting..");
			$("#alertError").show();
			}
	
		$("#hidProductIDSave").val("");
		$("#formProduct")[0].reset();
	
}


//CLIENT-MODEL================================================================
function validateProductForm()
{
	//product Code
	if ($("#Product_Code").val().trim() == "")
	{
		return "Insert Product Code.";
	}
	
	// Product_Name
	if ($("#Product_Name").val().trim() == "")
	{
		return "Insert Product Name.";
	}
	
	// Category
	if ($("#Category").val().trim() == "")
	{
		return "Insert Category.";
	}
	
	// collaborators
	if ($("#collaborators").val().trim() == "")
	{
		return "Insert collaborators.";
	}
	
	
    
	
	// Price
	if ($("#Price").val().trim() == "")
	{
		return "Insert Price.";
	}
	
	// is numerical value
	var tmpPrice = $("#Price").val().trim();
	if (!$.isNumeric(tmpPrice))
	 {
	 return "Insert a numerical value for Product Price.";
	 }
	
	// convert to decimal price
	 $("#Price").val(parseFloat(tmpPrice).toFixed(2)); 
	
	// Email
	if ($("#Email").val().trim() == "")
	{
		return "Insert Email";
	}

	
return true;
}


