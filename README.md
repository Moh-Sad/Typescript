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

## 📚 Resources
- [Mosh Hamedani's TypeScript Course](https://youtu.be/d56mG7DezGs?si=TOSXwiRECxAjuqta)

---

**➡️ Next Up:** Day 2 - Functions & Interfaces  
*(I’ll update this section tomorrow!)*

## 🌱 Daily Progress
I'll be updating this repository daily with:
- Key concepts learned
- Code examples
- Challenges faced
- Useful resources

## 📚 Learning Resources
- [TypeScript Official Documentation](https://www.typescriptlang.org/docs/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)

## 🤝 How to Use This Repository
- Feel free to follow along with my learning journey
- Suggest improvements or better practices
- Use the code examples as reference

Happy coding! 🚀