import java.util.*;
public class Problem{
public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int m,d,ans;
    ans=0;
    m=sc.nextInt();
    d=sc.nextInt();
    if((m<8&&m!=2)&& m%2==1)  
    {
        if(d>5)
            ans=6;
            else
            ans=5;
        
    }
    if((m<8&&m!=2)&& m%2==0)  
    {
        if(d>6)
            ans=6;
            else
            ans=5;
        
    }
    if(m>=8&& m%2==0)  
    {
        if(d>5)
            ans=6;
            else
            ans=5;
        
    }
    if(m>=8&& m%2==1)  
    {
        if(d>6)
            ans=6;
            else
            ans=5;
        
    }
    if(m==2)
    {
        if(d==1)
        ans=4;
        else
        ans=5;
    }
    System.err.println(ans);
 
 }}
