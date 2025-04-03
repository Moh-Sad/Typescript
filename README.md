# TypeScript Learning Journey 

*A daily log of my TypeScript progress*  

---

## **Day 1: Fundamentals**  
**📌 What I Learned**  
1. **TypeScript vs JavaScript**  
   - Static typing vs dynamic typing  
   - Compile-time error checking  
   - Enhanced IDE support  

2. **Setup**  
   ```bash
   npm install -g typescript
   tsc --init  
   ```

3. **Basic Types**  
   ```typescript
   let age: number = 25;
   let name: string = "Alice";
   let isDone: boolean = false;
   ```

**🚀 Code Example**  
```typescript
function greet(name: string): string {
  return `Hello, ${name}!`; 
}
console.log(greet("TypeScript"));
```

**🔧 How to Run**  
```bash
tsc Day1.ts && node Day1.js
```

---

## **Day 2: Advanced Concepts & New Tutorial**  
**📌 What I Learned**  
1. **Completed Mosh's Tutorial** covering:
   - Tuples, Enums, Union/Intersection types
   - Optional chaining, Nullable types
   - Never type, Rest parameters

2. **Started Dave Gray's Tutorial** (Lessons 1-5):
   - Type inference and avoiding `any`
   - Interfaces vs Type aliases
   - Classes with TypeScript
   - Basic DOM typing
   - Generics introduction

**🚀 Code Highlights**  
```typescript
// Interface example
interface Person {
    name: string;
    age: number;
    greet(): void;
}

// DOM typing example
const button = document.getElementById("myButton") as HTMLButtonElement;

// Generics introduction
function identity<T>(arg: T): T {
    return arg;
}
```

**🔧 Key Takeaways**  
- TypeScript's type inference reduces redundant annotations
- Interfaces are preferred for object shapes
- DOM elements need explicit typing
- Generics provide flexible type-safe functions

**📚 New Resources**  
- [Dave Gray's TypeScript Tutorial](https://youtube.com/playlist?list=PL0Zuz27SZ-6NS8GXt5nPrcYpust89zq_b)
- Progress: Completed Lesson 4

---

## 🌱 Daily Progress
I'll be updating this repository daily with:
- Key concepts learned
- Code examples
- Challenges faced
- Useful resources

## 📚 Learning Resources
- [TypeScript Official Documentation](https://www.typescriptlang.org/docs/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [Mosh Hamedani's TypeScript Course](https://youtu.be/d56mG7DezGs?si=TOSXwiRECxAjuqta)

## 🤝 How to Use This Repository
- Feel free to follow along with my learning journey
- Suggest improvements or better practices
- Use the code examples as reference

**➡️ Next Up:** Day 3 ...

Happy coding! 🚀