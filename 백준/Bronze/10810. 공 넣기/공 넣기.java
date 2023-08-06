import java.util.*;
import java.io.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder sb = new StringBuilder();
        
        String first = br.readLine();
        int N = Integer.valueOf(first.split(" ")[0]);
        int M = Integer.valueOf(first.split(" ")[1]);
        
        HashMap<Integer, Integer> result = new HashMap<>();
        for(int i=0; i<M; i++) {
            String temp = br.readLine();
            int I = Integer.valueOf(temp.split(" ")[0]);
            int J = Integer.valueOf(temp.split(" ")[1]);
            int K = Integer.valueOf(temp.split(" ")[2]);
            
            while(I<=J) {
                result.put(I, K);
                I++;
            }
        }
        for(int i=1; i<=N; i++) {
            sb.append(result.get(i) == null ? 0 : result.get(i));
            if(i != N) {
                sb.append(" ");
            }
        }
        System.out.println(sb);
    }
}