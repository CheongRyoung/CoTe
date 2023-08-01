import java.util.*;
import java.io.*;

public class Main {
    
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder sb = new StringBuilder();
        
        int N = Integer.valueOf(br.readLine());
        String[] arr = br.readLine().split(" ");
        int V = Integer.valueOf(br.readLine());
        int result = 0;
        
        for(int i=0; i<arr.length; i++) {
            int t = Integer.valueOf(arr[i]);
            if(t == V) {result++;}
        }
        System.out.print(result);
    }
}