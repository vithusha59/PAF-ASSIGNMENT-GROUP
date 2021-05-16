<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ page import="com.Product" %>    

<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Product Registration</title>
<link rel="stylesheet" href="Views/bootstrap.min.css">
<script src="Components/jquery-3.2.1.min.js"></script>
<script src="Components/Product.js"></script>
</head>
<body>
<div>
	<div class="container">
		<div class="row">
			<div class="col-6">
				<h1>Product Registration Portal</h1>
				<p>Please fill in this form to register product. </p>
				<form id="formProduct" name="formProduct" style="font-weight: bold">
					Product code:
					<input id="Product_Code" name="Product_Code" type="text" placeholder="Enter the Product Code" class="form-control form-control-sm">
					
					<br>Product Name:
					<input id="Product_Name" name="Product_Name" type="text" placeholder="Enter the Product Name" class="form-control form-control-sm">
					
					<br>Category:
					<input id="Category" name="Category" type="text" placeholder="Enter the Category" class="form-control form-control-sm">
					
					<br>Collaborators:
					<input id="collaborators" name="collaborators" type="text" placeholder="Enter the Name of Collaborators" class="form-control form-control-sm">
					
					<br>Price:
					<input id="Price" name="Price" type="text" placeholder="Enter the Price" class="form-control form-control-sm">
					
					<br>Email:
					<input id="Email" name="Email" type="text" placeholder="Enter your Email as example@gmail.com" class="form-control form-control-sm">
					
					<br>
					<input id="btnSave" name="btnSave" type="button" value="Save" class="btn btn-primary">
					
					<input type="hidden" id="hidProductIDSave" name="hidProductIDSave" value="">
					
				</form>
				<div id= "alertSuccess" class="alert alert-success"></div>
				<div id= "alertError" class="alert alert-danger"></div>
				<br>
				<div id="divProductGrid">
					<%
						Product prObj = new Product();
						out.print(prObj.readProducts());
					%>
				</div>
			</div>
		</div>
	</div>
</div>

</body>
</html>