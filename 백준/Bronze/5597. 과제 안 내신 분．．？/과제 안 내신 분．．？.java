import java.util.*;
import java.io.*;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        
        List<Integer> collect1 = Stream.iterate(1, i -> i + 1).limit(30).collect(Collectors.toList());
        List<Integer> collect = br.lines().map(s -> Integer.valueOf(s)).sorted().collect(Collectors.toList());
        List<Integer> collect2 = collect1.stream().filter(i -> !collect.remove(i)).collect(Collectors.toList());
        for (Integer i : collect2) {
            System.out.println(i);
        }
    }
}