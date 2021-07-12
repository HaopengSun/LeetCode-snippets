// Input: numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]
// Output: [0,2,1,3]
// Explanation: There are a total of 4 courses to take.
// To take course 3 you should have finished both courses 1 and 2.
// Both courses 1 and 2 should be taken after you finished course 0.
// So one correct course order is [0,1,2,3]. Another correct ordering is [0,2,1,3].

const findOrder = function(numCourses, prerequisites) {
  const prerequisitesPairs = {}
  prerequisites.forEach(prerequisite => {
    if (!prerequisitesPairs[prerequisite[1]]){
      prerequisitesPairs[prerequisite[1]] = [prerequisite[0]]
    } else {
      prerequisitesPairs[prerequisite[1]].push(prerequisite[0])
    }
  })
  console.log(prerequisitesPairs)
  
  for (const key in prerequisitesPairs){
    let schedule = []
    if (prerequisitesPairs[key].length > 1){
      for (let course of prerequisitesPairs[key]){
        schedule.push(course)
      }
      schedule.forEach(course => {
        while(prerequisitesPairs[course]){
          if (prerequisitesPairs[course].length === 1){
            if (!schedule.includes(prerequisitesPairs[course][0])) schedule.push(prerequisitesPairs[course][0])
            course = prerequisitesPairs[course]
          }
        }
      })
      schedule.unshift(Number(key))
    }
    console.log(schedule)
  }
};

const numCourses = 4
const prerequisites = [[1,0],[2,0],[3,1],[3,2]]
findOrder(numCourses, prerequisites)