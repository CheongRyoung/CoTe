import java.util.*;
import java.io.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        
        StringBuilder sb = new StringBuilder();
        String NX = br.readLine();
        int N = Integer.valueOf(NX.split(" ")[0]);
        int X = Integer.valueOf(NX.split(" ")[1]);
        
        String[] A = br.readLine().split(" ");
        
        for(int i=0; i<A.length; i++) {
            if(Integer.valueOf(A[i]) < X) {
                if(sb.length() > 0) {
                    sb.append(" ");
                }
                sb.append(Integer.valueOf(A[i]));
            }
        }
        System.out.print(sb);
    }
}