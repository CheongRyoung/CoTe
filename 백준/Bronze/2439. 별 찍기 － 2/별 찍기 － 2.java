import java.util.*;
import java.io.*;

public class Main {
    
    private static final String STAR = "*";
    private static final String EMPTY = " ";
    
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder sb = new StringBuilder();
        
        int N = Integer.parseInt(br.readLine());
        for(int i=1; i<=N; i++) {
            sb.append(EMPTY.repeat(N-i))
                .append(STAR.repeat(i))
                .append("\n");
        }
        br.close();
        System.out.println(sb);
    }
}