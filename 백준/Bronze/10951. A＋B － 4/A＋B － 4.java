import java.util.*;
import java.io.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder sb = new StringBuilder();
        
        while(true) {
            String line = br.readLine();
            if(line == null) {
                break;
            }
            StringTokenizer st = new StringTokenizer(line, " ");
            sb.append(Integer.parseInt(st.nextToken())+Integer.parseInt(st.nextToken()))
                .append("\n");
        }
        br.close();
        System.out.println(sb);
    }
}