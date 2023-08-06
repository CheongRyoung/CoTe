import java.util.*;
import java.io.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder sb = new StringBuilder();
        
        String[] A = br.readLine().split(" ");
        int N = Integer.valueOf(A[0]);
        int M = Integer.valueOf(A[1]);
        
        HashMap<Integer, Integer> result = new HashMap<>();
        br.lines().forEach(s -> {
            String[] s1 = s.split(" ");
            Integer i = result.get(Integer.valueOf(s1[1]));
            Integer j = result.get(Integer.valueOf(s1[0]));
            result.put(Integer.valueOf(s1[0]), i != null ? i : Integer.valueOf(s1[1]));
            result.put(Integer.valueOf(s1[1]), j != null ? j : Integer.valueOf(s1[0]));
        });
        for(int i=1; i<=N; i++) {
            sb.append(result.get(i) == null ? i : result.get(i));
            if(i != N) {
                sb.append(" ");
            }
        }
        System.out.println(sb);
    }
}