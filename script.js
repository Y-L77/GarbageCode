document.addEventListener('DOMContentLoaded', function() {

    

    // Title Animation (Existing Code)
    const rightAudio = new Audio ("soundsfolder/rightSound.wav");
    const wrongAudio = new Audio ("soundsfolder/wrongAudio.wav");
    function playSound(isCorrect) {
        let audio = new Audio(isCorrect ? "soundsfolder/rightSound.wav" : "soundsfolder/wrongAudio.wav");
        audio.play();
    }
    const homeTitle = document.querySelector('.homeTitle'); // Corrected selector

    if (homeTitle) {
        animateTitle(homeTitle);
    }

    function animateTitle(element) {
        const originalText = element.textContent;
        const characters = originalText.split('');
        element.textContent = '';
        
        characters.forEach((char, index) => {
            const span = document.createElement('span');
            span.textContent = char;
            span.style.opacity = '0';
            span.style.color = getRandomColor();
            span.style.transition = `opacity 0.5s ease ${index * 0.05}s, color 0.3s ease ${index * 0.05}s`;
            element.appendChild(span);

            void span.offsetWidth;

            span.style.opacity = '1';
            setTimeout(() => {
                span.style.color = 'white';
            }, 500);
        });

        setTimeout(() => {
            const spans = element.querySelectorAll('span');
            spans.forEach((span, index) => {
                span.style.transition = `transform 0.3s ease ${index * 0.03}s`;
                span.style.transform = 'scale(1.1)';
            });

            setTimeout(() => {
                spans.forEach(span => {
                    span.style.transform = 'scale(1)';
                });
            }, 300);
        }, characters.length * 50 + 500);
    }

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
  
    const codeSnippets = [

        {
            code: '#include 〈iostream〉\n\nvoid outputVariable(){\n\n    int x;\n    std::cout << x << std::endl;\n}\n\n\nint main(){\n\n   outputVariable();\n   return 0;\n}\n\n\n//ts is c++',
            type: "garbage code",
            incorrectMessage: "Maybe we forgot to initialize the variable, try something that won't crash the program."
        },
        {
            code: 'def file_parser(byte_data, big_endian=True):\n   result = 0;\n\n   if big_endian:\n\n       for byte in byte_data:\n\n    result = (result << 8) | byte\n\n  else:\n\n     for byte in reversed(byte_data):\n\n       result = (result << 8)\n\n    return result\n\n //very cool python code',
            type: "recyclable code",
            incorrectMessage: "This code is very efficent at converting bytes to integers, and should be used whenever such case appears."

        },
        {
            code: 'public static void main(String[] args){\n  List(Integer) nums = Arrays.asList(n);\n//now imagine n was a list of integers :)\n  List(Integer) top3 = topThree(numbers);\n  System.out.println(top3);\n\n//I know its supposed to be List arrow brackets but my javascript code color thing doesnt register it so im using normal brackets. pretend they are arrow brackets please\n\npublic static List(Integer) topThree(List(Integer) nums){\n//sry for line wrapping\n    if(nums.size() < 3){\n      throw new IllegalArgException("valid input pls");\n }\n nums.sort(Collections.reverseOrder());\n return nums.subList(0, 3);\n\n //this java <3',
            type: "clean code",
            incorrectMessage: "This code is very neat and good at solving a specific problem, we're looking for something messy!"
        },
        {
            code: '+[----->+++<]>.++++[->++<]>++.++++++++++.-------.+++++++++.------.--------.>++++[->++<]>+.---.+++++.---------.+++++++++.-----.-------.---[->++++<]>--.-------.---[--->+<]>-----.---[--->+<]>---.[--->++<]>+.---.>++++.-------.>+++++++++[->++<]>+.+++++++++++.---------.>-[--->+<]>-----.+++++.>---.[--->+<]>-----.-------.-----.-----.+++++.-----.-------.>+++[->++<]>+.[--->+<]>---.---.>++++++.\n\n\n //Output: It is 2025/03/01 2:04pm and my partner sanjey is asleep rn ',
            type: "garbage code",
            incorrectMessage: "maybe pick a snippet with code we can read"
        },
        {
            code: '𐑉𐑆𐐒 𐑉𐑋𐐀 \n    𐐀𐐰𐐿 int 𐑋𐑇 5 𐑉𐑇 1 𐐷𐑇 0\n\n    𐑌𐐮𐑉𐐿("𐑑𐑉𐑆𐐿𐐤")\n\n    𐐉𐐪𐑄𐐮𐐒 𐐸𐑌𐑀 𐑋𐑇 > 0\n        𐑉𐑆𐐒 𐑉𐑇\n            𐑉𐑇𐑉𐑀 𐑋𐑇 * 𐑉𐑇\n            𐑋𐑇 𐑋𐑇 - 1\n        𐑁𐑋𐐀𐑄 𐑉𐑇\n    𐑌𐐮𐑉𐐿("𐑑𐑉𐑆𐐿𐐤")\n    𐑌𐐮𐑉𐐿(𐑉𐑇)\n\n\n//line 1, main\n//line 2 initializing some integers\n//some if conditions and print conditions on the rest of the lines idk',
            type:"garbage code",
            incorrectMessage: "amazing factorial calculator, just probably not very convenient to read for a compiler and people."
        },
        {
            code: 'HelloWorld("Print")\n\n\nif(0 == 0 && 1 == 1){\n print("粉红海喜马拉雅海盐")("pink salt")\n\n\n //glass bottle festive coca cola\n\n//pseudo-code³\n\n}',
            type: "garbage code",
            incorrectMessage:"The code we're looking for should compile properly...",
        },
        {
            code: 'fnc binarySearch(arr, target){\n let left = 0;\n let right = arr.length - 1;\n\n while(left <= right){\n      int mid = (left+right) // 2;\n      if(arr[mid] == target){return mid};\n      if(arr[mid] < target){left = mid+1};\n      if(arr[mid] > target){right = mid-1};\n  }\n\nreturn -1;\n\n//will return -1 if not in arr\n\n}\n\n\n//this is pseudo-javascript code.\n//assume javascript doesnt disqualify it from being garbage code',
            type: "recyclable code",
            incorrectMessage: "this is reusable, but not the right type of code."
        },
        {
          code: 'public static void BFS(int sx, int sy, int ex, int ey, char[][] graph){\n\n    boolean[][] visited = new boolean[8][8];\n    Queue<int[]> queue = new LinkedList<>();\n\n    queue.add(new int[]{sx, sy});\n\n    visited[sx][sy] = true;\n\n    while(!queue.isEmpty()){\n        BFSNeighboursSort(queue.poll());\n    }\n}\n\nstatic void BFSNeighboursSort(int[] node){\n\n    private final int[] dx = {1, -1, 0, 0};\n    private final int[] dy = {0, 0, -1, 1};\n    //...\n    //assume logic works\n\n//this code snippet only accounts for the BFS func.\n\n//this is pseudo java code\n\n//graph programming is my opp',
          type: "recyclable code",
          incorrectMessage: "we're looking for something that isn't reusable"
        },
        {
          code: 'std::vector<int> sieve(int n){\n    std::vector<bool> prime(n+1, true);\n    std::vector<int> primes;\n\n    for(int p = 2; p*p <= n; p++){\n        if(prime[p]){\n            for(int i = p*p; i <= n; i += p){\n                prime[i] = false;\n            }\n        }\n    }\n\n    for(int i = 2; i <= n; i++){\n        if(prime[i]) primes.push_back(i);\n    }\n\n    return primes;\n}\n\n //prime number generator using sieve of eratosthenes',
          type: "recyclable code",
          incorrectMessage: "Great for generating primes, but too useful for what we're looking for."
      },
      {
          code: 'func quickSort(arr: [Int]) -> [Int] {\n    if arr.count <= 1 { return arr }\n    let pivot = arr[arr.count / 2]\n    let left = arr.filter { $0 < pivot }\n    let middle = arr.filter { $0 == pivot }\n    let right = arr.filter { $0 > pivot }\n    return quickSort(left) + middle + quickSort(right)\n}\n\n//this is a swift quicksort\n//sorting algos are fun',
          type: "recyclable code",
          incorrectMessage: "Good sorting function, but we need something messier!"
      },
      {
          code: 'void function fibonacci(n){\n  let a = 0, b = 1;\n  for (let i = 0; i < n; i++){\n    let temp = a;\n    a = b;\n    b = temp + b;\n  }\n  return a;\n}\n\n//fibonacci but in javascript',
          type: "recyclable code",
          incorrectMessage: "Great Fibonacci function, but we need something more chaotic."
      },
      {
        code: 'public class Main {\n    public static void main(String[] args) {\n        int n = 10;\n        System.out.println(fib(n));\n    }\n\n    static int fib(int n) {\n        if (n <= 1) return n;\n        return fib(n-1) + fib(n-2);\n    }\n}\n\n//Recursive Fibonacci implementation in Java, but very inefficient',
        type: "recyclable code",
        incorrectMessage: "This works but has terrible performance for large inputs."
    },
    {
        code: 'int main() {\n    int arr[5] = {1, 2, 3, 4};\n    std::cout << arr[4] << std::endl;\n    return 0;\n}\n\n//do we like data structures',
        type: "garbage code",
        incorrectMessage: "Maybe try something that doesn’t invoke undefined behavior?"
    },
    {
        code: 'using System;\n\nclass Program {\n    static void Main() {\n        Console.WriteLine(Sum(5));\n    }\n\n    static int Sum(int n) {\n        if (n == 0) return 0;\n        return n + Sum(n - 1);\n    }\n}\n\n//recursive sum in C#',
        type: "recyclable code",
        incorrectMessage: "Looks clean, but we want something more chaotic!"
    },
    {
        code: 'class A {\n    static int x = 5;\n    public static void main(String[] args) {\n        A obj1 = new A();\n        A obj2 = new A();\n        obj1.x = 10;\n        System.out.println(obj2.x);\n    }\n}\n\n//confusing static variable behavior in Java',
        type: "garbage code",
        incorrectMessage: "Be careful with shared static variables!"
    },
    {
        code: 'int main() {\n    char *ptr;\n    printf("%c", *ptr);\n    return 0;\n}\n\n//hopefully this C code doesnt crash our program',
        type: "garbage code",
        incorrectMessage: "Try initializing the pointer before dereferencing it!"
    },
    {
        code: 'public class Main {\n    public static void main(String[] args) {\n        List<Integer> numbers = null;\n        numbers.add(5);\n    }\n}\n\n//null pointer exception speedrun',
        type: "garbage code",
        incorrectMessage: "Might want to initialize that list first!"
    },
    {
        code: 'class Main {\n    public static void main(String[] args) {\n        for(int i = 0; i < 10; i--){\n            System.out.println("Looping forever!");\n        }\n    }\n}\n\n//Java infinite loop moment',
        type: "garbage code",
        incorrectMessage: "Try fixing the loop condition?"
    },
    {
        code: 'print("Hello, World!") #pythön is fun 🤖🐍\nprint("🙂")\nprint("\U0001F923")\n\n//python supports emoji but should we?',
        type: "garbage code",
        incorrectMessage: "Sure, but maybe not in production?"
    },
    {
        code: '><>v\n    v^v^<\n    ><>v\n    <^<^\n\n//This is fish programming language\n//It does something, maybe',
        type: "garbage code",
        incorrectMessage: "Can we have something that isn’t esoteric?"
    },
    {
        code: 'using System;\nusing System.Threading.Tasks;\n\nclass Program {\n    static Task<string> GetDataAsync() {\n        return Task.Run(() => {\n            Task.Delay(1000).Wait();\n            return "Data loaded";\n        });\n    }\n\n    static void Main(string[] args) {\n        // Blocking call on Task.Result may cause deadlocks in some environments\n        var dataTask = GetDataAsync();\n        Console.WriteLine("Processing...");\n        Console.WriteLine(dataTask.Result);\n    }\n}\n\n// C# asynchronous code that blocks on Task.Result instead of using await',
        type: "garbage code",
        incorrectMessage: "Use async/await consistently to prevent blocking and potential deadlocks."
    },
    {
        "code": "#include <iostream>\n#include <vector>\n\nvoid bubbleSort(std::vector<int>& arr) {\n    int n = arr.size();\n    for (int i = 0; i < n - 1; i++) {\n        for (int j = 0; j < n - i - 1; j++) {\n            if (arr[j] > arr[j + 1]) {\n                std::swap(arr[j], arr[j + 1]);\n            }\n        }\n    }\n}\n\nint main() {\n    std::vector<int> arr = {64, 34, 25, 12, 22, 11, 90};\n    bubbleSort(arr);\n\n    for (int num : arr) {\n        std::cout << num << \" \";\n    }\n    std::cout << std::endl;\n    return 0;\n\n //focus on the sort function}",
        "type": "recyclable code",
        "explanation": "Bubble sort works but is slow for large lists. Consider quicksort or merge sort!"
    },
    {
        "code": "public class ArrayShuffle {\n    public static void main(String[] args) {\n        int[] arr = {1, 2, 3, 4, 5};\n        for (int i = 0; i < arr.length; i++) {\n            int j = (int) (Math.random() * arr.length);\n            int temp = arr[i];\n            arr[i] = arr[j];\n            arr[j] = temp;\n            if(i % 2 == 0){\n              i--;\n            }\n        }\n        for (int num : arr) {\n            System.out.print(num + \" \");\n        }\n    }\n}",
        "type": "garbage code",
        "incorrectMessage": "Loops with predictable patterns are overrated."
    },
    {
        "code": "function generateFibonacciSequence(n) {\n    if (n <= 0) {\n        return [];\n    }\n    if (n === 1) {\n        return [0];\n    }\n    const sequence = [0, 1];\n    while (sequence.length < n) {\n        const nextNumber = sequence[sequence.length - 1] + sequence[sequence.length - 2];\n        sequence.push(nextNumber);\n    }\n    return sequence;\n}",
        "type": "recyclable code",
        "incorrectMessage": "This Fibonacci sequence generator is too helpful, like a well-organized toolbox. We need something more like a drawer full of random parts."
    },
    {
        "code": "std::vector<int> transformAndFilter(const std::vector<int>& arr, auto&& transform, auto&& filter) {\n    std::vector<int> res;\n    std::transform(arr.begin(), arr.end(), std::back_inserter(res), [&transform, &filter](int x) { return filter(x) ? transform(x) : 0; });\n    res.erase(std::remove(res.begin(), res.end(), 0), res.end());\n    return res;\n}",
        "type": "recyclable code",
        "incorrectMessage": "This transform and filter function is too optimized, like a finely tuned engine. We need something more like a rusty old tractor!"
    },
    {
        "code": "public class FindMaxSubarraySum {\n    public static void main(String[] args) {\n        int[] arr = {-2, 1, -3, 4, -1, 2, 1, -5, 4};\n        int maxSoFar = arr[0];\n        int currentMax = arr[0];\n\n        for (int i = 1; i < arr.length; i++) {\n            currentMax = Math.max(arr[i], currentMax + arr[i]);\n            maxSoFar = Math.max(maxSoFar, currentMax);\n        }\n\n        System.out.println(maxSoFar);\n    }\n}",
        "type": "clean code",
        "incorrectMessage": "This max subarray sum finder is too straightforward, like a well-marked treasure map. We need something more like a hidden message in a bottle!"
    },
    {
        "code": "std::vector<int> applyCustomFilter(const std::vector<int>& data, auto&& filterFunc) {\n    std::vector<int> result;\n    std::copy_if(data.begin(), data.end(), std::back_inserter(result), filterFunc);\n    return result;\n}",
        "type": "recyclable code",
        "incorrectMessage": "This custom filter function is too adaptable, like a multi-purpose tool. We need something more like a specific tool for a specific task."
    }

      ];
    
      const compliments = [
        "You're a code wizard!",
        "Absolutely brilliant!",
        "Spot on!",
        "You nailed it!",
        "Perfect choice!",
        "You have a keen eye for code!",
        "Excellent work!",
        "You're a coding genius!",
        "That's the right stuff!",
        "ABSOLUTELY EXTRAVAGANT THINKING!",
        "Your logic is as flawless as a perfectly balanced binary tree!",
        "You're the debugger of destiny!",
        "Legend has it that even AI models learn from your code!",
        "If coding were an art, you'd be the Picasso of programming!",
        "Your problem-solving skills are more optimized than a well-tuned algorithm!",
        "10/10, would compile again!",
        "Your brain must have multithreading enabled—so fast, so efficient!",
        "Syntax errors fear you!",
        "Your code is smoother than a well-implemented gradient descent!",
        "Your refactoring skills are nothing short of legendary!",
        "You just achieved peak computational elegance!",
        "Even the most complex recursion bows before your understanding!",
        "Your problem-solving is so sharp, it slices through spaghetti code like a hot knife through butter!",
        "Simply sensational syntax!",
        "ASTOUNDINGLY BRILLIANT—your mind is an optimized neural network of genius!",
        "Your code is so clean, it makes linting tools obsolete!",
        "Your debugging skills are sharper than a diamond-tipped pointer!",
        "The elegance of your solutions rivals the most beautiful mathematical proofs!",
        "You're redefining best practices with every keystroke!"
      ];
    
      let currentCodeType;
const questionText = document.getElementById("questionText");
const snippetButtons = document.querySelectorAll(".snippetButton");
const resultText = document.getElementById("resultText");
const skipButton = document.getElementById("skipButton");

// New counter elements and variables
const correctCounter = document.getElementById("correctCounter");
const wrongCounter = document.getElementById("wrongCounter");
let correctCount = 0;
let wrongCount = 0;

let clickDisabled = false; // Flag to prevent multiple clicks

function setQuestion() {
  clickDisabled = false; // Re-enable clicks when setting a new question

  // Choose one of the three code types randomly.
  const types = ["clean code", "recyclable code", "garbage code"];
  currentCodeType = types[Math.floor(Math.random() * types.length)];
  questionText.textContent = `Find the ${currentCodeType}.`;

  // Pick one correct snippet.
  const correctSnippets = codeSnippets.filter(snippet => snippet.type === currentCodeType);
  const correctSnippet = correctSnippets[Math.floor(Math.random() * correctSnippets.length)];

  // Pick two incorrect snippets.
  const incorrectSnippets = codeSnippets.filter(snippet => snippet.type !== currentCodeType);
  const shuffledIncorrect = incorrectSnippets.sort(() => Math.random() - 0.5);
  const selectedIncorrect = shuffledIncorrect.slice(0, 2);

  // Merge and shuffle the options.
  const selectedSnippets = [correctSnippet, ...selectedIncorrect].sort(() => Math.random() - 0.5);

  // Set the innerHTML of each button with a code block.
  snippetButtons.forEach((button, index) => {
    button.innerHTML = `<pre><code class="javascript">${selectedSnippets[index].code}</code></pre>`;
    button.dataset.type = selectedSnippets[index].type;
  });

  resultText.textContent = "";
  hljs.highlightAll(); // Re-run highlighting
}

function checkAnswer(selectedButton) {
  if (clickDisabled) return; // Prevent multiple clicks
  clickDisabled = true; // Disable further clicks until the next question is set

  if (selectedButton.dataset.type === currentCodeType) {
    correctCount++;
    correctCounter.textContent = `Questions Right: ${correctCount}`;

    const randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];
    resultText.textContent = randomCompliment;
    resultText.style.color = "green";

    playSound(true); // Plays rightSound.wav
  } else {
    wrongCount++;
    wrongCounter.textContent = `Questions Wrong: ${wrongCount}`;

    const preElement = selectedButton.querySelector("pre");
    if (preElement) {
      const originalCode = preElement.innerText.replace(/\s+/g, " ").trim();
      const incorrectSnippet = codeSnippets.find(snippet => {
        return snippet.code.replace(/\s+/g, " ").trim() === originalCode;
      });

      resultText.textContent = incorrectSnippet ? incorrectSnippet.incorrectMessage : "Incorrect! (Possible formatting issue)";
      console.warn("Snippet mismatch:", originalCode);
    } else {
      resultText.textContent = "Incorrect!";
    }

    resultText.style.color = "red";
    playSound(false); // Plays wrongAudio.wav
  }

  // Set a timeout before allowing another selection
  setTimeout(setQuestion, 1000);
}

snippetButtons.forEach(button => {
  button.addEventListener("click", () => checkAnswer(button));
});

skipButton.addEventListener("click", () => {
  if (!clickDisabled) setQuestion();
});

// Initialize the first question
setQuestion();
    });