function largest()
			{
				var num1, num2, num3;
				num1 = Number(document.getElementById("N1").value);
				num2 = Number(document.getElementById("n2").value);
				num3 = Number(document.getElementById("n3").value);

				if(num1>num2 && num1>num3)
				{
					document.getElementById("N").innerHTML ="Number 1 is Greatest";
				}
				else if(num2>num1 && num2>num3)
				{
					document.getElementById("N").innerHTML ="Number 2 is Greatest";
				}
				else 
                {
					document.getElementById("N").innerHTML ="Number 3 is Greatest";
				}
			}